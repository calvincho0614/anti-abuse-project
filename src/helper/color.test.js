import { generateColor, generateColorList } from './color';

describe('Test Color Generator', () => {
    
    it('generate same length of color list', () => {
        const input = ["ESN", "ES", "B", "S"],
                output = generateColorList(input.length);
        expect(output.length).toBe(input.length);
    });

    it('check format of generated color list', () => {
        const rgbRegex = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/,
                output = generateColor();
        expect(rgbRegex.test(output)).toBe(true);
    });

});
