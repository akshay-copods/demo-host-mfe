import { rest } from 'msw'


export const handlers = [
  rest.post('/api/v1/user', (req, res, ctx) => {
    // Persist user's authentication in the session
    if (!req.body){
       return res( ctx.status(400))

    }
    return res(
      // Respond with a 200 status code
      ctx.status(201)
    )
  }),
  rest.get('api/v1/loginOptions/org/:orgId',(req, res, ctx) => {
    const {orgId}= req.params
   
    return res ( 
        ctx.status(200),
        ctx.json({
            data:{
                "social_options": [
                    {
                        "name": "Google",
                        icon:"logos:google-icon",
                        "type": "Google_App",
                        "options": {
                            "app_Id": "",
                            "app_secret": ""
                        }
                    },
                    {
                        "name": "Facebook",
                        icon:'logos:facebook',
                        "type": "Fb_App",
                        "options": {
                            "app_Id": "",
                            "app_secret": ""
                        }
                    }
                ],
                "sso_options": [
                    "okta",
                    "pingone"
                ]
            }
        })
    )
  })
]