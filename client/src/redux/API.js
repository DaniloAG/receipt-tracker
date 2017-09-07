import axios from "axios";

export default {
    User: {
        userSignInRequest: (credentials) => (
            axios.post("/api/authenticate", { credentials }).then(
                res => res.data.User
            )
        )
    }
}