
const isPalindrome = head => {
    const reverse = node => {
        let prev = null;

        while(node) {
            const tmp = node.next;
            node.next = prev;
            prev = node;
            node = tmp;
        }

        return prev;
    }

    let mid = head;
    let fast = head;

    while(fast) {
        if (!fast.next) {
            break;
        }

        mid = mid.next;
        fast = fast.next.next;
    }

    let n = head;
    let rn = reverse(mid);

    while(rn) {
        if (n.val !== rn.val) {
            return false;
        }

        n = n.next;
        rn = rn.next;
    }

    return true;
}
