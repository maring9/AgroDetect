<script>
import { Storage, Auth } from 'aws-amplify';

export default {
    data() {
        return {
            uploadedImage: null,
            b64EncodedImage: null
        }
    },
    methods: {
        async uploadImageToS3(image) {
            try {
                await Storage.put(
                    image.name,
                    image,
                    {
                        level: "private",
                        contentType: "image/*"
                    }
                );
            } catch (error) {
                console.log("Error uploading file: ", error);
            }
        }
    }

}
</script>