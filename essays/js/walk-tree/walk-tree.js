/**
 * Created by zxt on 2017/5/19.
 */
function walk( treeData  ){
    let liElement = document.createElement("li");

    let element = document.createElement("a");
    element.setAttribute("href", treeData.link);
    element.innerHTML = treeData.name;
    liElement.appendChild( element )

    if ( !treeData.isleaf ) {
        let children = treeData.children;
        let ulElement = document.createElement("ul");
        for (let i = 0; i < children.length; i++) {
            ulElement.appendChild(walk(children[i]));
        }
        liElement.appendChild(ulElement);
    }

    return liElement;
}


let jsonData = {
    "name": "1级菜单1",
    "link": "###",
    "isleaf": false,
    "level": 0,
    "children": [
        {
            "name": "2级菜单1",
            "link": "###",
            "isleaf": false,
            "level": 1,
            "children": [
                {
                    "name": "3级菜单1",
                    "link": "###",
                    "isleaf": true,
                    "level": 2,
                    "children": null
                },
                {
                    "name": "3级菜单2",
                    "link": "###",
                    "isleaf": true,
                    "level": 2,
                    "children": null
                }
            ]
        },
        {
            "name": "2级菜单2",
            "link": "###",
            "isleaf": false,
            "level": 1,
            "children": [
                {
                    "name": "3级菜单3",
                    "link": "###",
                    "isleaf": true,
                    "level": 2,
                    "children": null
                }
            ]
        }
    ]
};

window.onload = document.getElementById("root").appendChild( walk( jsonData ));