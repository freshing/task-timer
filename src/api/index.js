import loginApi from "./login/loginApi"
import userApi from "./user/userApi"
import tasksApi from "./tasks/tasksApi"

export default {
	...loginApi,
	...userApi,
	...tasksApi,
}
