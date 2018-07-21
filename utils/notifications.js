import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'notification';

export const clearLocalNotification = () =>
	AsyncStorage.removeItem(NOTIFICATION_KEY)
		.then(Notifications.cancelAllScheduledNotificationsAsync);

const createNotification = () => ({
	title: 'Do your quiz!',
	body: '👋 don\'t forget to do a quiz today!',
	ios: {
		sound: true,
	},
	android: {
		sound: true,
		priority: 'high',
		sticky: false,
		vibrate: true,
	}
});

const createNotificationTime = () => {
	// set reminder the next day @ 18.00
	let tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);

	// +1 hours to match local CET time
	tomorrow.setHours(18 + 1);
	tomorrow.setMinutes(0);
	tomorrow.setSeconds(0);

	return {
		time: tomorrow,
		repeat: 'day'
	}
};

export const setStudyReminderNotification = () =>
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then(data => {
			if (data === null) {
				Permissions.getAsync(Permissions.NOTIFICATIONS)
					.then(({status: existingStatus}) => {

						let askedStatus = existingStatus;

						if (existingStatus !== 'granted' || 'undetermined') {
							Permissions.askAsync(Permissions.NOTIFICATIONS)
								.then(({status}) => askedStatus = status)
						}

						if (existingStatus || askedStatus === 'granted' || 'undetermined') {
							Notifications.cancelAllScheduledNotificationsAsync();
							Notifications.scheduleLocalNotificationAsync(
								createNotification(),
								createNotificationTime()
							);
							AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
						}

					})
			}
		});
