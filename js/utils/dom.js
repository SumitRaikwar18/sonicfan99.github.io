const DOM = {
    create: (tagName, className = '', attributes = {}) => {
        const element = document.createElement(tagName);
        if (className) element.className = className;
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
        return element;
    },

    append: (parent, ...children) => {
        children.forEach(child => parent.appendChild(child));
    }
};