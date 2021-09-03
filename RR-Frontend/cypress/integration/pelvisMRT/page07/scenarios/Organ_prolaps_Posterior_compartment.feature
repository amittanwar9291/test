Given	I'm logged-in with valid credentials
When I select 'Female' radio button from Page 01 of Pelvic MRI
And I select 'MRI pelvic floor' radio button from Page 01 of Pelvic MRI
And 'Dynamic' checkbox
Then I go to Page 07 of Pelvic MRI
And I click on 'Finding' radio button
And dropdown below 'Finding' is enabled

When I select 'Organ prolaps'  from the dropdown
Then 'Add new finding' button is enabled
And 'Anterior compartment' tab is preselected

When I select 'Posterior compartment' tab
Then 'Anterior rectocele' checkbox is enabled
And 'Posterior rectocele' checkbox is enabled
And 'Lateral rectocele' checkbox is enabled
And 'Rectal intussusception' checkbox is enabled

When I select 'Anterior rectocele' checkbox
Then 'Expansion in reference to original position of the anterior rectal wall' input field is enabled
And 'Intraluminal CM retention after defecation' checkbox is enabled

When I enter '1' in the input field 'Expansion in reference to original position of the anterior rectal wall'
Then 'Light' is displayed in the auto-filled input field 'Grading'
And I enter '19' in the input field 'Expansion in reference to original position of the anterior rectal wall'
Then 'Light' is displayed in the auto-filled input field 'Grading'

When I enter '20' in the input field 'Expansion in reference to original position of the anterior rectal wall'
Then 'Medium' is displayed in the auto-filled input field 'Grading'
And I enter '40' in the input field 'Expansion in reference to original position of the anterior rectal wall'
Then 'Medium' is displayed in the auto-filled input field 'Grading'

When I enter '41' in the input field 'Expansion in reference to original position of the anterior rectal wall'
Then 'Severe' is displayed in the auto-filled input field 'Grading'

When I select 'Lateral rectocele' checkbox
Then 'Right' radio button is enabled
And 'Left' radio button is enabled

When I select 'Rectal intussusception' checkbox
Then 'Mucosal involvement' radio button is enabled
And 'Involvement of the entire rectal wall' is enabled
And 'Intrarectal' checkbox is enabled
And 'Intraanal' checkbox is enabled
And 'Extraanal with rectal prolapse' is enabled

And 'Circumferent' radio button is enabled
And 'Partially' radio button is enabled
And 'Failure of passage' checkbox is enabled



