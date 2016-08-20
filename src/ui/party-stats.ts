import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'party-stats',
    template: `
      <strong>Invited:</strong> {{invited}} 
      <strong>Attending:</strong> {{attending}}
      <strong>Guests:</strong> {{guests}}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyStats {
    @Input() invited;
    @Input() attending;
    @Input() guests;
}
