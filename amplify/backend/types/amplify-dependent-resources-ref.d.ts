export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "contactInfoDb": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "contactInfoLlambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "contactInfo": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}