# React Native Dimensions API Inconsistency on Android

This repository demonstrates a common, yet subtle, bug related to the `Dimensions` API in React Native on Android devices.  The issue centers around the unreliability of the `addEventListener` method when detecting screen orientation changes. While the `Dimensions` API generally provides screen dimensions correctly, the event listener may fail to fire consistently upon screen rotation, resulting in outdated and inaccurate dimension data being used by the app.

This often results in layout issues, such as elements being clipped, misaligned, or overlapping after a screen rotation.

This repository provides a minimal example showcasing the issue and a potential solution.

## How to Reproduce

1. Clone this repository.
2. Run the app on an Android device or emulator.
3. Rotate the screen.
4. Observe the layout of the app and note any inconsistencies or issues related to element positioning and sizing.