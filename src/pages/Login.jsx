import React, {useState} from "react";
import {login} from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {

	const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const result = await login(username, password);
            console.log("Login successful:", result);
			alert("登入成功");
			//TODO 重導到後台頁面
			navigate("/profile");
		}
		catch (error) {
			console.log(error);
			alert("登入失敗");
		}
		
	}


	return (
		<div className="bg-base-100 flex items-center justify-center min-h-screen">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title text-2xl font-bold mb-6">Login</h2>

					{/* 輸入表單 */}
					<form onSubmit={handleSubmit}>
						{/* 使用者 */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Username</span>
							</label>
							<label className="input input-bordered flex items-center gap-2">
								<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 opacity-70">
									<path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"/><circle cx="12" cy="6" r="6"/>
								</svg>
								<input
									type="text"
									className="grow"
									placeholder="Username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</label>
						</div>

						{/* 密碼 */}
						<div className="form-control mt-4">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<label className="input input-bordered flex items-center gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="w-4 h-4 opacity-70"
								>
									<path
										fill-rule="evenodd"
										d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
										clip-rule="evenodd"
									/>
								</svg>
								<input
									type="password"
									className="grow"
									placeholder="Enter password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
						</div>
						<div className="form-control mt-10">
							<button type="submit" className="btn btn-outline btn-primary">Login</button>
						</div>
					</form>
					<div className="divider">OR</div>
					<div className="text-center">
						<p>Don't have an account?</p>
						<a href="#" className="link link-primary">
							Sign up now
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
