function augmentingPath(graph, start, end) {
    let path = [];
    if(graph.length == 0 || Findpath(graph, start, end, path) == false){
        return [];
    }
    else{
        return path;
    }
}

function Findpath(graph, start, target, Apath) {
    if (start == target) {
        Apath.push(start);
        return Apath;        
    }

    Apath.push(start);
    for (let elements in graph[start]) {
        if (!Apath.includes(elements)) {
            if (Findpath(graph, elements, target, Apath)) {
                return true;
            }
        }
    }
    Apath.pop();
    return false;
}