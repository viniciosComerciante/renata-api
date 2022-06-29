class Helper {
    sendResponse(res, statusCode, data) {
        res.header("Access-Control-Allow-Origin", "*");
        return res.status(statusCode).json({ result: data });
      };
}


export default new Helper();