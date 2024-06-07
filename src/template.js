const template = (cf) => {
    
    return `
        <!DOCTYPE html>
        <html>

        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Year Missing Form</title>
        </head>

        <body>
        <p>You forgot to enter either parameters startYear or endYear (2013-2022)</p>
        <form action="" method="get" class="year-form">
            <div class="year-form">
                <label for="name">startYear: </label>
                <input type="text" name="startYear" id="startYear" required />
            </div>
            <div class="year-form">
                <label for="name">endYear: </label>
                <input type="text" name="endYear" id="endYear" required />
            </div>
            <div class="year-form">
                <input type="submit" value="Submit!" />
            </div>
        </form>
        </body>

        </html>
    `
}

export default template