Versions Android stock browser prior to 4.4 appear to have an incomplete or error-prone implementation of position: fixed. Sometimes this can be fixed by using <meta> to prevent user zooming but not always. Unfortunately it is also notoriously difficult to detect position: fixed problems.

This plugin looks for specific user agents known to have the issue and attaches a custom class — .crazy_position — to body when such a device is encountered.
