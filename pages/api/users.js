export default function handler (req,res){
    res.status(200).json({
        success : true,
        request_data : req.headers,
        query : [
            {
                id : 1,
                username : "Andi"
            },
            {
                id : 2,
                username : "Ismail"
            },
            {
                id:3,
                uername : "Abdul"
            },
            
        ]
    })
}