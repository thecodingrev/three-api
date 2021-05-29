import { connectToDb } from '../../helpers/mongoose/db';
import Post from '../../helpers/mongoose/post.model';


const Handler = async(req,res)=>{
    connectToDb();

    if(req.method === 'GET'){
        try{
            const result = await Post.find({}).exec();
            res.status(201).json({ result: result  })
        }catch(error){
            res.status(500).json({ message: 'Getting data failed'  })
        }
    }

    if(req.method === 'POST'){
        const {title,body} = req.body;

        try{
            const post =  new Post({
                title,
                body
            })
            await post.save();
            res.status(200).json({ result: post  })
        }catch(error){
            res.status(500).json({ message: 'Posting data failed'  })
        }


    }



}

export default Handler;