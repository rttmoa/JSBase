// react Diff算法

// 创建元素
function createElement(vnode) {
    var tag = vnode.tag  // 'ul'
    var attrs = vnode.attrs || {}
    var children = vnode.children || []
    if (!tag) {
        return null
    }

    // 创建真实的 DOM 元素
    var elem = document.createElement(tag)
    // 属性
    var attrName
    for (attrName in attrs) {
        if (attrs.hasOwnProperty(attrName)) {
            // 给 elem 添加属性
            elem.setAttribute(attrName, attrs[attrName])
        }
    }
    // 子元素
    children.forEach(function (childVnode) {
        // 给 elem 添加子元素
        elem.appendChild(createElement(childVnode))  // 递归
    })

    // 返回真实的 DOM 元素
    return elem
}



// 更新元素
function updateChildren(vnode, newVnode) {
    var children = vnode.children || []
    var newChildren = newVnode.children || []

    children.forEach(function (childVnode, index) {
        var newChildVnode = newChildren[index]
        if (childVnode.tag === newChildVnode.tag) {
            // 深层次对比，递归
            updateChildren(childVnode, newChildVnode)
        } else {
            // 替换
            replaceNode(childVnode, newChildVnode)
        }
    })
}

function replaceNode(vnode, newVnode) {
    var elem = vnode.elem  // 真实的 DOM 节点
    var newElem = createElement(newVnode)

    // 替换
}