// class MyArray {
//     length: number
//     data: any//number
//     constructor() {
//         this.length = 0
//         this.data = {}
//     }
//     get(index: number) { //O(1) //lookup/access
//         return this.data[index] //1
//     }
//     push(value: any) { // 1+1 = O(2)  =>  O(1)
//         this.data[this.length] = value; //1
//         this.length++ //1
//     }
//     pop() { //1+1+1+1+1 = O(5) => O(1)
//         if (this.length == 0) //1
//             return
//         this.length-- //1
//         const item = this.data[this.length] //1
//         delete this.data[this.length] //1
//         return item //1
//     }

//     delete(index: number) {//O(n)
//         if (index < 0 || index > this.length)
//             return
//         const item = this.data[index] //1
//         this.shift(index)
//         this.pop()
//         return item
//     }

//     private shift(index: number) {
//         for (let i = index; i < this.length - 1; i++) { // n
//             this.data[i] = this.data[i + 1]
//         }
//     }
//     insert(index: number, value: any) {
//         this.push(value)
//         for (let i = this.length - 1; i > index; i--) {
//             const holding = this.data[i]
//             this.data[i] = this.data[i - 1]
//             this.data[i - 1] = holding
//         }
//         return this.length
//     }
// }

// const myArray = new MyArray()
// myArray.push(20)
// myArray.push(30)
// myArray.insert(1, 90)
// console.log(myArray) //MyArray { length: 2, data: { '0': 20, '1': 90,'2':30 } }
// myArray.push(50)
// console.log(myArray)
// console.log(myArray.get(0))//20
// myArray.delete(1)//30
// console.log(myArray)
// myArray.pop()
// console.log(myArray)






class hashTable {
    data: any[]

    constructor(size: number) {
        this.data = new Array(size)
    }




    // has func 

    #hash(key: string) {
        var hash_value = 0
        for (let index = 0; index < key.length; index++) {
            hash_value += key.charCodeAt(index)
            hash_value = hash_value % this.data.length

        }
        return hash_value
    }



    //set func
    set(key: string, value: any) {
        let index = this.#hash(key)
        console.log(index);



        // no collision
        if (this.data[index] === undefined) {

            this.data[index] = []
        }
        //   collision
        this.data[index].push([key, value])
    }


    //get 

    get(key: string) {
        let index = this.#hash(key)
        const bucket_data = this.data[index]


        if (bucket_data !== undefined) {
            for (let i = 0; i < bucket_data.length; i++) {
                let item = bucket_data[i]
                const item_key = item[0]

                if (key == item_key) {

                    const value = item[1]
                    return value

                }
            }
        }
        return undefined


    }



    
    //delete


    delete(key: string) {
        let index = this.#hash(key)
        const bucket_data = this.data[index]


        if (bucket_data !== undefined) {
            for (let i = 0; i < bucket_data.length; i++) {

                const item = bucket_data[i]
                    , item_key = item[0]

                if (key === item_key) {
                    bucket_data.splice(item, 1)
                }

            }
        }



    }











}

let hashTable_obj = new hashTable(3)

hashTable_obj.set("a", "gong")
hashTable_obj.set("b", "test")
console.log(hashTable_obj.data);


hashTable_obj.delete("b")

console.log(hashTable_obj.data);






















// var a = hashTable_obj.hashfunction("A")
// console.log(a);
// var a = hashTable_obj.hashfunction("B")
// console.log(a);






