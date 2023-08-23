export const userLogout = async (req, res) => {
    // Destroy the user session
    req.session.destroy(err => {
        if (err) {
            console.log("Error while logging out: ", err.message);
            return res.status(500).json({ success: false, error: "Error logging out" });
        } 
        res.clearCookie('connect.sid'); // Clear the session cookie
        return res.status(200).json({ success: true, message: "Logged out successfully" });
    });
};