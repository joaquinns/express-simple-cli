
const manoCtrl = {};

// Example
manoCtrl.create = async (req, res) => {
    try {
        /** Logic here **/
    } catch(error) {
        res.status(400).json(error.details);
    }
}

export default manoCtrl;
    