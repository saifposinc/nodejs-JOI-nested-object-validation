const Joi = require('joi');
const arrayStrings = ['hello','world','123456789'];
const arrayObjects = [{example:'example1'},{example:'example2'},{example:'example3'}];
const userInput = {personalInfo:{
                    streetAddress: 'abcdefghij',
                    city: '55555',
                    state: 'fl'}, preferences: arrayObjects};
const personalInfoSchema = Joi.object({
    streetAddress: Joi.string().trim().required(),
    city: Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
});
const preferenceSchema = Joi.array().items(Joi.object({
    example: Joi.string().trim().max(8).required()
}));

const schema = Joi.object({
    personalInfo: personalInfoSchema,
    preferences: preferenceSchema
});

const validation = schema.validate(userInput);
if(validation.error)
    console.log(validation);
else
    console.log(userInput);