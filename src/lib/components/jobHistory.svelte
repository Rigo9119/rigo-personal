<section class="jobHistory">
    <div class="job">
        <h3>year</h3>
        <h3>company</h3>
        <h4>job title</h4>
        <p>description</p>
        <ul>
            <li>tech 1</li>
            <li>tech 2</li>
            <li>tech 3</li>
            <li>tech 4</li>
        </ul>
    </div>
</section>

<style lang="scss">
    .jobHistory {
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 45%;
    }

    .job { 
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-between;
        margin: 5px;
        padding: 10px;
        border: 1px solid transparent;
        border-radius: 10px;
        box-shadow: -2px 1px 5px 1px rgba(0,0,0,0.34);
        width: 100%;
    }
</style>

