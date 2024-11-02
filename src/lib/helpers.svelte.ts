export function uiHelpers() {
    let isOpen = $state(false);
    function toggle() {
        isOpen = !isOpen;
        // console.log('toggled', isOpen);
    }
    function close() {
        isOpen = false;
        // console.log('closed', isOpen);
    }
    function open() {
        isOpen = true;
        // console.log('opened', isOpen);
    }
    return {
        get isOpen() {
            return isOpen;
        },
        set isOpen(value) {
            isOpen = value;
        },
        toggle,
        close,
        open
    };
}