import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const buttons = (props) => (
    <Button animated>
        <Button.Content visible>{props.visibleLanguage}</Button.Content>
        <Button.Content hidden>{props.hiddenLanguage}</Button.Content>
    </Button>

    <Button animated>
        <Button.Content visible>English</Button.Content>
        <Button.Content hidden><Icon name='smile'/></Button.Content>
    </Button>
    <Button animated>
        <Button.Content visible>Español</Button.Content>
        <Button.Content hidden>Spanish</Button.Content>
    </Button>
    <Button animated>
        <Button.Content visible>العربية</Button.Content>
        <Button.Content hidden>Arabic</Button.Content>
    </Button>
    <Button animated>
        <Button.Content visible>اردو</Button.Content>
        <Button.Content hidden>Urdu</Button.Content>
    </Button>
    <Button animated>
        <Button.Content visible>中文</Button.Content>
        <Button.Content hidden>Chinese</Button.Content>
    </Button>
    <Button animated>
        <Button.Content visible>日本語</Button.Content>
        <Button.Content hidden>Japanese</Button.Content>
    </Button>
)

export default buttons;