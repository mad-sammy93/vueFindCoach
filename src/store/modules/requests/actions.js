export default {
    async contactCoach(context, payload){
        const newRequest = {
            // id: new Date().toISOString(), //Firebase will generate a id automatically
            // coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        };
        const response = await fetch(`https://findacoach-485df-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
        } 

        newRequest.id = responseData.name;
        newRequest.coachId = responseData.id

        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const coachId =  context.rootGetters.userId;
        const response = await fetch(`https://findacoach-485df-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`);

        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
        }

        const requests = [];

        for(const key in responseData){
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message,

            };
            requests.push(request);
        }
        context.commit('setRequests', requests)
    }
};