# To deploy run:
""" 
cd to directory
gcloud functions deploy add_user --trigger-event providers/firebase.auth/eventTypes/user.create --trigger-resource triviadeck-app --runtime python38
"""
import firebase_admin
from firebase_admin import firestore

app = firebase_admin.initialize_app()
store = firestore.client()

def add_user(data, context):
    """ Triggered by creation or deletion of a Firebase Auth user object.
     Args:
            data (dict): The event payload.
            context (google.cloud.functions.Context): Metadata for the event.
    """

    userDict =  {"email" : data["email"], 
                "displayName" : data["displayName"],
                "createdAt" : data["metadata"]["createdAt"],
                "photoURL" : data["photoURL"],
                "authProvider" : data["providerData"][0]["providerId"],
                "weight" : 1,
                }

    userLogsContributionsField =  {"uid" : data["uid"], 
                }
    
    return(store.collection('users').document(data["uid"]).set(userDict), store.collection('users').document(data["uid"]).collection('logsUser').document("contributions").set(userLogsContributionsField))
    # return(store.collection('users').document(data["uid"]).set(userDict)

