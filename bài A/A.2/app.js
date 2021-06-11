const arr = [{
        name: "Arsenal",
        point: "99",
        GD: 45
    },
    {
        name: "Chelsea",
        point: "75",
        GD: 39
    },
    {
        name: "MU",
        point: "60",
        GD: 29
    },
    {
        name: "liverpool",
        point: "88",
        GD: 39
    }
]
for (i = 0; i < arr.length; i++) {
    if (arr[i].point > arr[i + 1].point) {
        const obj = arr[i];
        obj.position = i
    }
}


/// Chưa xong