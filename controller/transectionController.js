const transectionModel = require("../model/transectionModel");
const moment = require("moment")

const getTransectionController = async (req, res) => {
    try {
        const { frequency, selectedDate, type } = req.body
        // console.log(req.body);
        const transectionData = await transectionModel.find({
            user_id: req.body.user_id,
            ...(frequency !== "custom" ?
                {
                    date: {
                        $gt: moment().subtract(Number(frequency), "d").toDate()
                    }
                } : {
                    date: {
                        $gte: selectedDate[0],
                        $lte: selectedDate[1]
                    }
                }
            ),
            ...(type !== "all" &&
                { type }
            )
        })
        res.status(200).json({
            transectionData
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}


const addTransectionController = async (req, res) => {
    try {
        const transectionData = new transectionModel(req.body)
        await transectionData.save();
        res.status(201).json({
            success: true,
            transectionData
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}



module.exports = { addTransectionController, getTransectionController }