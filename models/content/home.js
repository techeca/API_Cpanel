import mongoose from 'mongoose'

const { Schema } = mongoose;

const ContentSchema = Schema({
  primary: {
    section: String,
    mainTitle: {
      textContent: String,
      typeElement: String,
      dark: String,
      light: String,
      fontStyle: String
    },
    secondTitle: {
      textContent: String,
      typeElement: String,
      dark: String,
      light: String,
      fontStyle: String
    },
    buttonText: [
      {
        typeElement: String,
        textContent: String,
        path: String
      },
      {
        typeElement: String,
        textContent: String,
        path: String
      }
  ],
    urlImg:{
      typeElement: String,
      path: String
    },
  },
  secondary:{
    section: String,
    mainTitle: {
      textContent: String,
      typeElement: String,
      dark: String,
      light: String,
      fontStyle: String
    },
    secondTitle: {
      textContent: String,
      typeElement: String,
      dark: String,
      light: String,
      fontStyle: String
    },
    items: [
      {
      name: {
        textContent: String,
        typeElement: String
      },
      description: {
        textContent: String,
        typeElement: String
      },
      icon: {
        typeElement: String,
        iconName: String
      }
    }
  ],
    urlImg: {
      typeElement: String,
      path: String
    },
 },
  third: {
   section: String,
   mainTitle: {
     textContent: String,
     typeElement: String,
     dark: String,
     light: String,
     fontStyle: String
   },
   secondTitle: {
     textContent: String,
     typeElement: String,
     dark: String,
     light: String,
     fontStyle: String
   },
   team: [{
     name: String,
     title: String,
     description: String,
     urlImg: String,
     rrss: [{
       facebook: String,
       twitter: String,
       github: String,
       other: String
     }]
   }],
 },
  newsletter: {
    section: String,
    mainTitle: {
      textContent: String,
      typeElement: String,
      dark: String,
      light: String,
      fontStyle: String
    },
    secondTitle: {
      textContent: String,
      typeElement: String,
      dark: String,
      light: String,
      fontStyle: String
    },
    thirdTitle: {
      textContent: String,
      typeElement: String,
      dark: String,
      light: String,
      fontStyle: String
    },
    buttonText: String,
    linkPolicyText: String
  }
},
  {
    collection: 'content'
  }
);

export const Content = mongoose.model('Content', ContentSchema)
