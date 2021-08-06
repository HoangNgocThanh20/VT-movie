export const slug = {
    encode: (str) => {
        let arr = str.split(' ');
        let newArr = [];
        for(let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
            newArr.push('-')
        }
        newArr.pop();
        return newArr.join('');
    },
    decode: (str) => {
        let arr = str.split('-');
        let newArr = [];
        for(let i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
            newArr.push(' ');
        }
        newArr.pop();
        return newArr.join('');
    }
}