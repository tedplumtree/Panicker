# panicker

Keep your charging phone safe, exactly where you put it

## Idea

Use this Android / iPhone app when you need to charge your phone a few feet
away from you, in an airport, cafe, or a gym. Once you place the phone on a
stable ground and activate the app, anyone picking it up will trigger an alarm.

## Development

This project will use React Native. React Native is a [high performant]
(https://medium.com/the-react-native-log/comparing-the-performance-between-native-ios-swift-and-react-native-7b5490d363e2)
framework suitable for fast development.

This project will use Redux as the flux state manager for the React app.

## Specifics

The plan is to have two boolean states, "active," and "moving". The app alarms
exactly when it is both "active" and "moving."
