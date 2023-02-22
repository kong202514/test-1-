function process_number(n: number) {
    console.log('กำลังประมวลผล....เพิ่มข้อมูลสำเร็จ')
    return n + n;
}
// process_number(20)
// process_number(20) //the same calculation
// process_number(20) //the same calculation

interface Number_Array {
    [index: number]: number;//  https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures
}
let cache_number: Number_Array = {}
function memoizedDoSomeThing(n: number) {
    if (n in cache_number) {
        console.log('---------ข้อมูนี้มีอยู่แล้ว---------')
        return cache_number[n]
    }
    console.log('กำลังประมวลผล....เพิ่มข้อมูลสำเร็จ')

    const result_return_number = n + n
    cache_number[n] = result_return_number
    return result_return_number
}
memoizedDoSomeThing(20)
memoizedDoSomeThing(20) //cache
memoizedDoSomeThing(20) //cache

