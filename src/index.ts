import express from 'express';

const app = express();

app.get("/health", (req, res): void => {
    const now = new Date();
    console.log(now);
    // console.log(new Date().getTime());
    res.status(200).json(
        {
            "success": "true",
            "data": {"status": "ok"},
            "error": null
        }
    );
})  

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});