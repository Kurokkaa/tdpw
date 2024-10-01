import { helloWorld, helloYou, helloHuman, repeatHelloYou } from "../src/hello-funcs";
import type { Human } from "../src/types";

describe("helloWorld", () => {
    it("doit return 'Hello, World!'", () => {
        expect(helloWorld()).toBe("Hello, World!");
    });
});

describe("helloYou", () => {
    it("ne doit pas return 'Hello, John!'", () => {
        expect(helloYou("John")).toBe("Hello, John!");
    });

    it("doit retourner une erreur de nom vide", () => {
        expect(() => helloYou("")).toThrow("Error: nom ne peut etre vide");
    });
});

describe("helloHuman", () => {
    it("doit return un humain", () => {
        const johnDoe: Human = {
            firstname: "John",
            lastname: "Doe",
            birthyear: 1980
        };
        const currentYear = new Date().getFullYear();
        const expectedAge = currentYear - johnDoe.birthyear;

        expect(helloHuman(johnDoe)).toBe(`Hello, John Doe! tu as ${expectedAge} ans.`);
    });
});

describe("repeatHelloYou", () => {
    it("doit return 'Hello, John!' 3 fois", () => {
        const expectedOutput = "Hello, John!\nHello, John!\nHello, John!\n";
        expect(repeatHelloYou(3, "John")).toBe(expectedOutput);
    });

    it("doit mettre une erreur", () => {
        expect(() => repeatHelloYou(-1, "John")).toThrow("Error: la répetition doit etre positive!");
    });
});
