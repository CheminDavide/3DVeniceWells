# 3DVeniceWells

### Steps

_Below is an example of the steps to follow in order to generate all the information needed for one well_

1. From the map on the book try to estimate the location and thanks to [location identification](localization_tools/index.html) HTML page, get the well's ID from the GEOjson file;
2. Store the IDs in the [location extractor](localization_tools/wells_storage.ipynb) notebook and generate a json file;
3. Add the generated json code to the [catalogue](wells_catalogue.json);
4. Open [parameters extractor](grasshopper_tools/param_extractor_min.gh), upload one of the page picture typing the command:
    ```sh
    PictureFrame
    ```
    Define the points and then press the button to generate the json file with the parameters;
5. Copy the code from the file `params_TEMPLATE.json` to a new file named `<well_ID>.json` in the [params](params/) folder;
6. Import this new file to (grasshopper_tools/well_models.gh) and (grasshopper_tools/well_models.3dm);
7. Adjust the parameters and **bake the model**;
8. Export the model like `<well_ID>_model.fbx` in the [models](models/) folder;
9. Export a picture of the rendered model:
    - Set one of the views in full screen, change the view to _Custom1_ and preview it in rendered mode, and then run the command
    ```sh
    ViewCaptureToFile
    ```
    - Save the picture as `<well_ID>_rend.fbx` in the [models/rend_models](models/rend_models) folder;
10. Update the [catalogue](wells_catalogue.json) with all the information from the book.
Repeat these steps 250 times.