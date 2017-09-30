function getElementsByClassName(className, root) {
    const result = [];

    // this is a very simple check if element is defined/not null or
    // if it's a DOM Element
    if (!root || !root.nodeType) {
        root = document.body;
    }

    function f(node) {
        if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains(className)) {
            result.push(node);
        }

        for (let i = 0; i < node.childNodes.length; i++) {
            f(node.childNodes[i]);
        }
    }

    f(root);

    return result;
}
