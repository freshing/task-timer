import http from '@/http/http'
import config from '@/http/httpConfig'
import router from "@/router/router";
import { handleApiError } from '@/api/apiHelper'

function addTask(task) {
	return http.post('/tasks/', task, config.addCsrfHeader())
		.then(response => {
		})
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function getTasks() {
	return http.get('/tasks/')
		.then(response => response.data)
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function startTask(id, task) {
	return http.patch('/tasks/' + id, task, config.addCsrfHeader())
		.then(response => response.data)
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function pauseTask(id, task) {
	return http.patch('/tasks/' + id, task, config.addCsrfHeader())
		.then(response => response.data)
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function finishTask(id, task) {
	return http.patch('/tasks/' + id, task, config.addCsrfHeader())
		.then(response => response.data)
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}

function getEntries(id) {
	return http.get('/tasks/' + id + '/entries/',)
		.then(response => response.data)
		.catch(() => handleApiError("Wystąpił błąd podczas wysyłania pliku. Skontaktuj się z Administratorem."));
}


export default {
	addTask,
	getTasks,
	startTask,
	pauseTask,
	finishTask,
	getEntries
}
