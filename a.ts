// class Vertex {
//     [ID: string]: string[]
// }

// class Graph {
//     node_list: Vertex = {}
//     numberOfNodes: number = 0

//     addVertex(node: string) {
//         this.numberOfNodes++
//         this.node_list[node] = []
//     }
//     addEdge(node1: string, node2: string) {
//         this.node_list[node1].push(node2)
//         this.node_list[node2].push(node1)
//     }
//     showConnections() {
//         const allNodes = Object.keys(this.node_list)
//         for (const node of allNodes) {
//             const edges = this.node_list[node as keyof object]
//             let connections = ''
//             for (const edge of edges) {
//                 connections += edge + ' '
//             }
//             console.log(node + '------->' + connections)
//         }
//     }
// }

// const g = new Graph()
// g.addVertex('0')
// g.addVertex('1')
// g.addVertex('2')
// g.addVertex('3')

// g.addEdge('0', '1')
// g.addEdge('2', '1')
// g.addEdge('2', '3')
// g.addEdge('1', '3')

// g.showConnections()



const x = "hello"
console.log(x.substring(1)) //ello
console.log(x.charAt(0)) //h

function reverseString(text: string) {
    let reverseText = ""
    for (let i = text.length - 1; i >= 0; i--) {
        reverseText += text[i]
    }
    return reverseText
}
console.log(reverseString(x))//olleh

function recursiveReverseString(text: string) {
    //     let reverseText = ""
    //     for (let i = text.length - 1; i >= 0; i--) {
    //         reverseText += text[i]
    //     }



    //     if ( ) 
    //         return ""

    recursiveReverseString()
}
console.log(recursiveReverseString('hello'))//olleh
console.log(recursiveReverseString('prayuth'))//htuyarp