
export const makeController = (ctrlName) => {
    return `
const ${ctrlName}Ctrl = {};

// Example
${ctrlName}Ctrl.create = async (req, res) => {
    try {
        /** Logic here **/
    } catch(error) {
        res.status(400).json(error.details);
    }
}

export default ${ctrlName}Ctrl;
    `;
}