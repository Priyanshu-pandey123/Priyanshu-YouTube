

const commentData=[
    {id:1,
    comment:"hello priyanshu pandey form youtube",
    replies:[

    ]

    },
    {
        id:2,
        comment:"hello! dear from nest level deep",
        replies:[
            {
                id:2,
                comment:"hello! dear from nest level deep",
                replies:[
        
                ]
            },
            {
                id:2,
                comment:"hello! dear from nest level deep",
                replies:[
                    {
                        id:2,
                        comment:"hello! dear from nest level deep",
                        replies:[
                            {
                                id:2,
                                comment:"hello! dear from nest level deep",
                                replies:[
                        
                                ]
                            },
                        ]
                    }, {
                        id:2,
                        comment:"hello! dear from nest level deep",
                        replies:[
                
                        ]
                    }
                ]
            },

        ]
    },
    {
        id:2,
        comment:"hello! dear from nest level deep",
        replies:[
            {
                id:2,
                comment:"hello! dear from nest level deep",
                replies:[
        
                ]
            }, {
                id:2,
                comment:"hello! dear from nest level deep",
                replies:[
                    {
                        id:2,
                        comment:"hello! dear from nest level deep",
                        replies:[
                
                        ]
                    }
                ]
            }
        ]
    }
]





 const Comment=( {data})=>{
    return <div className="p-2 m-4 bg-gray-200 border-b-2 rounded-lg shadow-lg w-[500px]" >
            <img
            className='h-[30px] w-[30px] '
            alt="not found"
            src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
            />
        
            <div className="">
                <p>name:{data.comment}</p>
                <p>hey! buddy this id priyanshu pandey</p>
            </div>

    </div>
}


const CommentList = ({ data }) => {
    return  data.map((comment,index)=>(
        <div>
            <Comment key={index} data={comment}/>
            <div className="p-2 ml-5">
                <Comment data={comment.replies} />
            </div>
        </div>
    ))

    
}







const CommentContainer = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Comment:</h1>
      <CommentList data={commentData}/>
    </div>
  )
}

export default CommentContainer
