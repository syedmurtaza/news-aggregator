export default function IsValidURLHelper(string) {
    try {
        new URL(string);
        return true;
    } catch (err) {
        return false;
    }
}