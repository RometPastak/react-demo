"use client";

import { useCallback, useState } from "react";
import type { Route } from "./+types/home";
import { Button, Col, Row, Select, StatusBadge, Text, VerticalSpacing, type ISelectOption } from "@tehik-ee/tedi-react/tedi";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Select component page" },
    { name: "description", content: "This is demo page for select component!" },
  ];
}

export default function SelectPage() {
    const [value, setValue] = useState<typeof colourOptions[number]>();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isInputShort, setIsInputShort] = useState(false);

    const onChange = useCallback((v: unknown) => {
        console.log(v);
    }, []);

    const handleInputChange = useCallback((v: string) => {
        console.log(v);
    }, []);

    const colourOptions: ISelectOption[] = [
        { value: 'ocean', label: 'Ocean' },
        { value: 'blue', label: 'Blue', isDisabled: true },
        { value: 'purple', label: 'Purple' },
        { value: 'red', label: 'Red' },
        { value: 'orange', label: 'Orange' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'green', label: 'Green' },
        { value: 'forest', label: 'Forest' },
        { value: 'slate', label: 'Slate' },
        { value: 'silver', label: 'Silver' },
    ];

    const filterColors = (inputValue: string) => {
        return colourOptions.filter((i) => {
            if (typeof i.label === 'string') {
                return i.label.toLowerCase().includes(inputValue.toLowerCase());
            }
            return;
        });
    };

    const loadOptions = (inputValue: string, callback: (options: ISelectOption[]) => void) => {
        setTimeout(() => {
            console.log(inputValue);
            callback(filterColors(inputValue));
        }, 1000);
    };

  return (
    <main className="flex flex-col items-center justify-center p-4 gap-4">
        <Button onClick={() => setIsInputShort(prev => !prev)}>
            Toggle Input is short
        </Button>
        <Select
            value={value}
            onChange={(value) => onChange(value)}
            noOptionsMessage={() => isInputShort ? "Input is short" : "No result"}
            loadingMessage={() => "Loading"}
            label={"Select label"}
            id="person-search"
            name="select-input"
            async={true}
            menuIsOpen={isMenuOpen}
            onMenuClose={() => setIsMenuOpen(false)}
            onMenuOpen={() => setIsMenuOpen(true)}
            onInputChange={(v) => handleInputChange(v)}
            loadOptions={loadOptions}
            helper={{ text: "Some helper text" }}
            renderOption={(props) => (
                <Row gutterX={2}>
                {/* {props.data.customData?.label && (
                    <Col width="auto">
                    <StatusBadge color={props.data.customData?.label === 'L' ? 'warning' : 'danger'}>
                        {props.data.customData?.value}
                    </StatusBadge>
                    </Col>
                )} */}
                <Col>
                    <Text color="brand">Some label</Text>
                </Col>
                </Row>
            )}
            renderMessageListFooter={() => (
                <VerticalSpacing size={0.75}>
                <Row justifyContent="center" gutterX={2}>
                    <Col width="auto">
                    <Button
                        size="small"
                        visualType="secondary"
                        onTouchStart={() => console.log('onTouchStart 1')}
                        onClick={() => console.log('onClick 1')}
                    >
                        Do X
                    </Button>
                    </Col>
                    <Col width="auto">
                    <Button
                        size="small"
                        visualType="secondary"
                        onTouchStart={() => console.log('onTouchStart 2')}
                        onClick={() => console.log('onClick 2')}
                    >
                        Do Y
                    </Button>
                    </Col>
                </Row>
                <Text modifiers={['small', 'center']} color="secondary">
                    Info text
                </Text>
                </VerticalSpacing>
            )}
        />
    </main>
  );
}
