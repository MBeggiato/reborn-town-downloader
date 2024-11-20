
import { fail } from '@sveltejs/kit';
export const actions = {
	download: async ({ cookies, request }) => {
		const data = await request.formData();
		const id = String(data.get('id'));
		if(id.length < 10){
			return fail(422, {description: 'Invalid ID', error: 'Invalid ID'});
		}
		console.log(data.get('id'));
	},

};
