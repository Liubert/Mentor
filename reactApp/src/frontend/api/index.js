import request from 'superagent'

const baseUrl = 'http://localhost:3001/';


export const getUsers = async () => {
    // updateUsers();
 const {body} = await request.get(
        baseUrl + 'users'
    );
    return body
};

export const updateUsers = async () => {
    const {body} = await request.put(
        baseUrl + 'users'
    ).send({ firstName: 'Gendalf',lastName:'White', spaceId:112, email:'lyber3t11@gmail.com' });
    return body


};

export const getSkills = async () => {
    const {body} = await request.get(
        baseUrl + 'skills'
    );
    return body
};

export const getQuestions = async () => {
    const {body} = await request.get(
        baseUrl + 'questions'
    );
    return body
};

export const getQuestionStates = async () => {
    const {body} = await request.get(
        baseUrl + 'questions-states'
    );
    return body
};