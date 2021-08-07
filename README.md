
## IDEA
This project is on a Smart Accessible bot that can be used by everyone especially by the people with hearing loss. Such disabled people face a lot of difficulty in using the bots on the websites. Researchers have found that it is much easier for sign language users to keep track with.Sign language is really their native form of communication.Reading/writing English is very much a second language to most deaf people.
Therefore, this Smart Bot can interpret the sign language from the user, and it will reply with sign language interpretation.

![ ](https://github.com/s3805530/azure_accessiblebot/blob/master/asl%20reasons.png)

## APPROACH

This project uses the end to end AI solution and, the machine learning life cycle.  
As machines become more intelligent, they can carry out more and more tasks leading to creating empathy and making the world a better place to live in.   
AI is the best approach for this project as it will help to detect the sign language shown by the user and thereby give the response accordingly. With the AI implementation, the bot can be used by any deaf people without any use of external help.The AI implemented in the project through the machine learning model.  
In this project AI works by combining large amounts of sign language data with fast, iterative processing and  algorithms, allowing the software to learn automatically from patterns or features in the data.Machine learning has automated analytical model building.



## IMPLEMENTATION

![ ](https://github.com/s3805530/azure_accessiblebot/blob/master/Architecture.png)  

The above diagram represents the architecture used for the implementation of the project.  

To make the machine learning model the full life cycle has been followed:-
1. Data Flow- https://www.kaggle.com/datamunge/sign-language-mnist  
This data has been used to train the model to detect the sign languages.This data contains only the letters and numbers of the sign languages.This dataset includes the images of the letters and numbers along with the pixel blocks for the data tagging.

2. Model Phase- In order to make the model, first the Azure ML studio had been used, but due to few errors, CustomVision.ai of Azure Cognitive services has been used to train the prediction model using the object detection algorithm.

3.Deployment Phase- The ML model has been deployed in the Customvision.ai of the Azure cognitive services.Formerly,it was deployed in the Azure ML studio, however for implementation with the bot,CustomVision has been used.   


The bot has been created using the Azure Bot Service and the QnA maker. The API key of the bot has been used in creating the web app which is further deployed in the Azure Static WebApp. Similarly, the API key of the CustomVision (ML Model) has been used in the webapp.

This project is implemented in such a way that it can be used to implement any Bot Services just by changing few parameters.




