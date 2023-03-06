import { graphql, rest } from 'msw'

const zeroStep = {
    stepId:0,
    userId:0,
    sbId:0,
    stepLayout:"WELCOME_PAGE",
    question:[],
    description:"The fun lies in getting to know each other!",
    userInputSections:[
        {
            sectionName:"",
            inputType:"text",
            inputLimit:"",
            placeholder:"Enter your Name",
            isRequired:true,
            optionGroups:[],
            prefix:""
        },
        {
        sectionName:"",
        inputType:"select",
        inputLimit:"",
        placeholder:"Select Your Job Function",
        isRequired:true,
        optionGroups:[
          {
            title: '',
            icon:"",
            backgroundColor: '',
            disableTitle:false,
            options: [
      {
          id:1,
          label:'Product Management',
          value:'Product Management',
      },
      {
          id:2,
          label:'Application Development',
          value:'Application Development',
      },
      {
          id:3,
          label:'Growth team',
          value:'Growth team',
      },
      {
          id:4,
          label:'DevOps / IT Operations',
          value:'DevOps / IT Operations'
      },
      {
          id:5,
          label:'Business Analytics',
          value:'Business Analytics'
      },
      {
          id:6,
          label:'P&L Lead / Manager',
          value:'P&L Lead / Manager'
      },
      {
          id:7,
          label:'CxO',
          value:'CxO'
      },
                     ]
          }
      ],
        prefix:""
    }
    ],
    previousStepId:''
  }
   const firstStep = {
    stepId:0,
    userId:0,
    sbId:0,
    stepLayout:"FROM_WITH_BANNER",
    question:[
        {
            text:"Ready to rock? Please",
            style:{
                color:"#000000D9" 
            }
        },
        {
            text:"enter your name and job function",
            style:{
                color:"#2F54EB"
            }
        },
        {
            text:"so we can get this show on the road!",
            style:{
                color:"#000000D9"
            }
        }
    ],
    description:"The fun lies in getting to know each other!",
    userInputSections:[
        {
            sectionName:"",
            inputType:"text",
            inputLimit:"",
            placeholder:"Enter your Name",
            isRequired:true,
            optionGroups:[],
            prefix:""
        },
        {
        sectionName:"",
        inputType:"select",
        inputLimit:"",
        placeholder:"Select Your Job Function",
        isRequired:true,
        optionGroups:[
          {
            title: '',
            icon:"",
            backgroundColor: '',
            disableTitle:false,
            options: [
      {
          id:1,
          label:'Product Management',
          value:'Product Management',
      },
      {
          id:2,
          label:'Application Development',
          value:'Application Development',
      },
      {
          id:3,
          label:'Growth team',
          value:'Growth team',
      },
      {
          id:4,
          label:'DevOps / IT Operations',
          value:'DevOps / IT Operations'
      },
      {
          id:5,
          label:'Business Analytics',
          value:'Business Analytics'
      },
      {
          id:6,
          label:'P&L Lead / Manager',
          value:'P&L Lead / Manager'
      },
      {
          id:7,
          label:'CxO',
          value:'CxO'
      },
                     ]
          }
      ],
        prefix:""
    }
    ],
    previousStepId:''
  }
  const secondStep = {
    stepId:1,
    userId:0,
    sbId:0,
    stepLayout:"IMAGE_UPLOAD",
    question:[
        {
            text:"Thanks Jinisha,",
            style:{
                color:"#2F54EB" 
            }
        },
        {
            text:"its great meeting you!",
            style:{
                color:"#000000D9"
            }
        },
    ],
    description:"We promise to handle your profile with care!",
    userInputSections:[
        {
            sectionName:"",
            inputType:"text",
            inputLimit:"",
            placeholder:"Enter your Name",
            isRequired:true,
            optionGroups:[],
            prefix:""
        },
        {
        sectionName:"",
        inputType:"select",
        inputLimit:"",
        placeholder:"Select Your Job Function",
        isRequired:true,
        optionGroups:[
          {
            title: '',
            icon:"",
            backgroundColor: '',
            disableTitle:false,
            options: [
      {
          id:1,
          label:'Product Management',
          value:'Product Management',
      },
      {
          id:2,
          label:'Application Development',
          value:'Application Development',
      },
      {
          id:3,
          label:'Growth team',
          value:'Growth team',
      },
      {
          id:4,
          label:'DevOps / IT Operations',
          value:'DevOps / IT Operations'
      },
      {
          id:5,
          label:'Business Analytics',
          value:'Business Analytics'
      },
      {
          id:6,
          label:'P&L Lead / Manager',
          value:'P&L Lead / Manager'
      },
      {
          id:7,
          label:'CxO',
          value:'CxO'
      },
                     ]
          }
      ],
        prefix:""
    }
    ],
    previousStepId:''
  }
  const thirdStep = {
    stepId:2,
    userId:0,
    sbId:0,
    stepLayout:"FROM_WITH_BANNER",
    question:[
        {
            text:"Your company is a mystery to us.",
            style:{
                color:"#000000D9" 
            }
        },
        {
            text:"Enter your company's name and URL,",
            style:{
                color:"#2F54EB"
            }
        },
        {
            text:"and lets solve it together!",
            style:{
                color:"#000000D9"
            }
        }
    ],
    description:"Help us understand your company and create a customized experience for you. ",
    userInputSections:[
        {
            sectionName:"",
            inputType:"text",
            inputLimit:"",
            placeholder:"Your organization URL",
            isRequired:true,
            optionGroups:[],
            prefix:"https://"
        },
        {
        sectionName:"",
        inputType:"text",
        inputLimit:"",
        placeholder:"Enter your organization name",
        isRequired:true,
        prefix:""
    }
    ],
    previousStepId:''
  }
  const fourthStep = {
    stepId:3,
    userId:0,
    sbId:0,
    stepLayout:"FROM_WITH_BANNER",
    question:[
        {
            text:"Your product is like a superhero to us.",
            style:{
                color:"#000000D9" 
            }
        },
        {
            text:"Please share its name and customer category",
            style:{
                color:"#2F54EB"
            }
        },
        {
            text:"to help us understand its powers.",
            style:{
                color:"#000000D9"
            }
        }
    ],
    description:"The fun lies in getting to know each other!",
    userInputSections:[
        {
            sectionName:"",
            inputType:"text",
            inputLimit:"",
            placeholder:"Enter your Product Name",
            isRequired:true,
            optionGroups:[],
            prefix:""
        },
        {
        sectionName:"",
        inputType:"select",
        inputLimit:"",
        placeholder:"Select your Customer Category",
        isRequired:true,
        optionGroups:[
          {
            title: '',
            icon:"",
            backgroundColor: '',
            disableTitle:false,
            options: [
      {
          id:1,
          label:'Businesses - B2B',
          value:'Businesses - B2B',
      },
      {
          id:2,
          label:'Employees as my Customers - B2E',
          value:'Employees as my Customers - B2E',
      },
      {
          id:3,
          label:'Direct Consumers - B2C',
          value:'Direct Consumers - B2C',
      },
      {
          id:4,
          label:'Others',
          value:'Others'
      },
      ]
          }
      ],
        prefix:""
    }
    ],
    previousStepId:''
  }
  
  const fifthStep = {
    stepId:4,
    userId:0,
    sbId:0,
    stepLayout:"INTENT_SELECTION",
    question:[
        {
            text:"What would  like to accomplish first?",
            style:{
                color:"#2F54EB" 
            }
        },
        {
            text:"Remember, you can always change your mind or do more things later on.",
            style:{
                color:"#000000D9"
            }
        },
    ],
    description:"Let's start by selecting the specific task so that we can accelerate your SaaS growth.",
    userInputSections:[
        {
            sectionName:"",
            inputType:"text",
            inputLimit:"",
            placeholder:"Enter your Name",
            isRequired:true,
            optionGroups:[],
            prefix:""
        },
        {
        sectionName:"",
        inputType:"",
        inputLimit:"",
        placeholder:"",
        isRequired:true,
        optionGroups:[],
        prefix:""
    }
    ],
    previousStepId:3
  }
  const sixthStep = {
    stepId:5,
    userId:0,
    sbId:0,
    stepLayout:"FROM_WITH_BANNER",
    question:[
        {
            text:"What are you ",
            style:{
                color:"#000000D9" 
            }
        },
        {
            text:"building this workflow for?",
            style:{
                color:"#2F54EB"
            }
        },
    ],
    description:"With your company details help us understand your company and create a customized experience for you. ",
    userInputSections:[
        {
        sectionName:"",
        inputType:"select",
        inputLimit:"",
        placeholder:"Select Your Job Function",
        isRequired:true,
        optionGroups:[
          {
            title: '',
            icon:"",
            backgroundColor: '',
            disableTitle:false,
            options: [
              {
                  id:1,
                  disabled:false,
                  label:'Company Website',
                  value:'Company Website',
              },
              {
                  id:2,
                  disabled:true,
                  label:'Cloud Market-Space',
                  value:'Cloud Market-Space',
              },
              {
                  id:3,
                  disabled:true,
                  label:'Marketing Campaigns',
                  value:'Marketing Campaigns',
              },
              {
                  id:4,
                  disabled:true,
                  label:'Training Workshops',
                  value:'Training Workshops'
              },
              {
                  id:5,
                  disabled:true,
                  label:'CRM Portals',
                  value:'CRM Portals'
              },
          ]
          }
      ],
        prefix:""
    }
    ],
    previousStepId:'4'
  }
  
  const sendOnboardingStep = (step)=>{
    switch (step) {
      case 0:
        return zeroStep
      case 1:
        return firstStep
      case 2:
        return secondStep
      case 3:
        return thirdStep
      case 4:
        return fourthStep
      case 5:
        return fifthStep
      case 6:
        return sixthStep
      default:
        break;
    }
  }
  

const api= graphql.link('http://localhost:3001/graphql')

export const handlers = [
    api.mutation('SubmitOnboardingStep', (req, res, ctx) => {
        const { stepId } = req.variables
        switch (stepId) {
          case 0:
            return res(
              ctx.data({
                data: {
                  nextStepId: 1,
                },
              }),
            )
          case 1:
            return res(
              ctx.data({
                data: {
                  nextStepId: 2,
                },
              }),
            )
          case 2:
            return res(
              ctx.data({
                data: {
                  nextStepId: 3,
                },
              }),
            )
          case 3:
            return res(
              ctx.data({
                data: {
                  nextStepId: 4,
                },
              }),
            )
          case 4:
            return res(
              ctx.data({
                data: {
                  nextStepId: 5,
                },
              }),
            )
          case 5:
              return res(
                ctx.data({
                  data: {
                    nextStepId: 6,
                  },
                }),
              )
              case 5:
                return res(
                  ctx.data({
                    data: {
                      nextStepId: null,
                    },
                  }),
                )
          default:
            break;
        }
        
      }),
    
      
    
      api.query('StartOnboarding', (req, res, ctx) => {
        const { step } = req.variables
        return res(
          ctx.data({
            data: sendOnboardingStep(step)
          }),
        )
      }),
//   rest.post('/api/v1/user', (req, res, ctx) => {
//     // Persist user's authentication in the session
//     if (!req.body){
//        return res( ctx.status(400))

//     }
//     return res(
//       // Respond with a 200 status code
//       ctx.status(201)
//     )
//   }),
  rest.get('http://localhost:5381/v1/GetSignupOptions',(req, res, ctx) => {
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