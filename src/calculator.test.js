const add = require("./calculator");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
    expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
    expect(add("1,2")).toBe(3);
});

it("should summarize multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
});

it("should handle an unknown number of arguments", () => {
    expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
})

it("should be able to handle new lines between numbers", () => {
    expect(add("1\n2,3,2")).toBe(8);
})

it("should be able to throw an error and print out a negative number", () => {
    expect(add('2,-8,-9')).toBe("Negatives not allowed : -8,-9");
});

it("should be able to ignore numbers that are bigger than 1000", () => {
    expect(add('5,1002')).toBe(5);
});

it("should be able to handle a different delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
});
