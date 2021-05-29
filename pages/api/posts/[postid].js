import axios from 'axios';

//  /api/posts/222222

export const getPost = async(postsId) => {
    try{
        const request = await axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postsId}`);

        return { post:request.data}
    }catch(error){
        return { message:'Sorry, try again' };
    }
}

const handler = async(req,res)=>{
    const postsId = req.query.postid;

    if(req.method === 'GET'){
        try{
            const request = await getPost(postsId)
            res.status(200).json(request);
        }catch(error){
            res.status(401).json(request);
        }
    }

}

export default handler;