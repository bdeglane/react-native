import {useEffect, useState} from "react";

export interface RandomUser {
    "gender": "male" | "female"
    "name": {
        "title": "Mr" | "Mrs" | "Ms" | 'Miss' | 'Madame' | 'Mademoiselle'
        "first": string
        "last": string
    },
    "location": {
        "street": {
            "number": number
            "name": string
        },
        "city": string
        "state": string
        "country": string
        "postcode": number
        "coordinates": {
            "latitude": string
            "longitude": string
        },
        "timezone": {
            "offset": string
            "description": string
        }
    },
    "email": string
    "login": {
        "uuid": string
        "username": string
        "password": string
        "salt": string
        "md5": string
        "sha1": string
        "sha256": string
    },
    "dob": {
        "date": string
        "age": number
    },
    "registered": {
        "date": string
        "age": number
    },
    "phone": string
    "cell": string
    "id": {
        "name": string
        "value": string
    },
    "picture": {
        "large": string
        "medium": string
        "thumbnail": string
    },
    "nat": string
}

export const useRandomUser = () => {
    const [users, setUsers] = useState<RandomUser[]>()

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then(response => response.json())
            .then(data => setUsers(data.results))
    }, [])

    return {
        users,
    }
}
